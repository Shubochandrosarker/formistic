/**
 * Formistic — newsletter sign-up handler.
 *
 * Submits any `.wpcf-newsletter` form (the [wpcf_newsletter] shortcode) to the
 * admin-ajax subscribe endpoint and reports the result inline, so subscribers
 * are stored in the Newsletter tab without a full page reload.
 */
( function () {
	'use strict';

	if ( typeof window.WPISTIC_CF_NL === 'undefined' ) {
		return;
	}

	function setStatus( el, message, ok ) {
		if ( ! el ) {
			return;
		}
		el.textContent = message;
		el.className = 'wpcf-newsletter-status' + ( ok ? ' is-ok' : ' is-error' );
	}

	function handle( form ) {
		form.addEventListener( 'submit', function ( e ) {
			e.preventDefault();

			var emailInput = form.querySelector( 'input[name="email"]' );
			var statusEl   = form.querySelector( '.wpcf-newsletter-status' );
			var button     = form.querySelector( 'button, input[type="submit"]' );
			var email      = emailInput ? emailInput.value.trim() : '';

			if ( ! email ) {
				setStatus( statusEl, WPISTIC_CF_NL.i18n.invalid, false );
				return;
			}

			if ( button ) {
				button.disabled = true;
			}
			setStatus( statusEl, WPISTIC_CF_NL.i18n.sending, true );

			var body = new FormData();
			body.append( 'action', 'wpcf_newsletter_subscribe' );
			body.append( '_wpnonce', WPISTIC_CF_NL.nonce );
			body.append( 'email', email );
			body.append( 'source', form.getAttribute( 'data-source' ) || 'shortcode' );

			fetch( WPISTIC_CF_NL.ajaxUrl, {
				method: 'POST',
				credentials: 'same-origin',
				body: body
			} )
				.then( function ( r ) { return r.json(); } )
				.then( function ( res ) {
					var data = res && res.data ? res.data : {};
					var ok   = !! ( res && res.success );
					setStatus( statusEl, data.message || ( ok ? WPISTIC_CF_NL.i18n.ok : WPISTIC_CF_NL.i18n.error ), ok );
					if ( ok && emailInput ) {
						emailInput.value = '';
					}
				} )
				.catch( function () {
					setStatus( statusEl, WPISTIC_CF_NL.i18n.error, false );
				} )
				.finally( function () {
					if ( button ) {
						button.disabled = false;
					}
				} );
		} );
	}

	document.addEventListener( 'DOMContentLoaded', function () {
		var forms = document.querySelectorAll( '.wpcf-newsletter' );
		Array.prototype.forEach.call( forms, handle );
	} );
}() );
