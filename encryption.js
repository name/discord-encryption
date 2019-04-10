//META{"name":"encryption"}*//
class encryption {
    load() {

        //  add crypto lib + some useful functions
        $("head").append(`
      			<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/sjcl/1.0.7/sjcl.min.js"></script>
      			<script type="text/javascript" src="https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDfunctionsDevilBro.js"></script>
		    `);

    }

    stop() {}

    start() {

        console.clear();
        //  load password from local storage
        function load_password() {
            var localStorageEncryption = localStorage.discordEncryption ? JSON.parse(localStorage.discordEncryption) : {};
            return localStorageEncryption["password"];
        }

        //  set encryption / decryption password
        try {
            window.shared_password = load_password();
            if (shared_password == null || shared_password == undefined) throw "error";
        } catch (error) {
            window.shared_password = "";
        }

        //  inject styles
        $("head").append(`
      		  <style type="text/css">
      		    .decrypted {
      			  color: #43b581 !important;
      			}
      			.decrypted a {
      			  color: #1C9C6D !important;
      			}
      			.not-decrypted {
      			  color: #FF2949 !important;
      			}
      			svg[class*=attachButton] {
      			  position: relative;
      			  margin-right: 10px;
      			}

      			.encryptionButton {
      			  position: relative;
      			  cursor: pointer;
      			  padding: 9px 0px;
      			  padding-left: 2px;
      			  -webkit-transition: all 280ms ease;
      			  transition: all 280ms ease;
      			}
      			.encryptionButton:hover path {
      			  fill: #fff;
      			}
      			#encryptionInput {
      			  position: absolute;
      			  top: -10px;
      			  left: 0px;
      			  width: 280px;
      			  height: 40px;
      			  overflow: hidden;
      			  border-radius: 5px;
      			  background-color: #FF2949;
      			  -webkit-transition: all 280ms ease 10ms;
      					  transition: all 280ms ease 10ms;
      			}
      			#encryptionInput.open {
      				top: -28px;
      			}

      			#encryptionInput svg {
      			  position: absolute;
      			  cursor: pointer;
      			  top: 8px;
      			  left: 10px;
      			  z-index: 1;
      			}

      			#encryptionInput input {
      			  position: absolute;
      			  top: 0px;
      			  left: 34px;
      			  width: 100%;
      			  height: 100%;
      			  border: none;
      			  text-indent: 4px;
      			  border-radius: 5px;
      			  background-color: #FF2949;
      		   	  -webkit-transition: all 280ms ease;
      				      transition: all 280ms ease;
      			  outline: 0px !important;
      			  -webkit-appearance: none;
      			  -webkit-box-shadow: none;
        			          box-shadow: none;
      			  resize: none;
      			  color: #ddd;
      			  font-size: .88em;
      			  padding: 1px 8px;
      			  white-space: nowrap;
      			}
      			#encryptionInput.nice-password,
      			#encryptionInput.nice-password input {
      			  background-color: rgb(67, 181, 129);
      			}

      			@keyframes fadeInUp {
      				from {
      					transform: translate3d(0,-6px,0)
      				}

      				to {
      					transform: translate3d(0,-16px,0);
      					opacity: 1
      				}
      			}
      			@-webkit-keyframes fadeInUp {
      				from {
      					transform: translate3d(0,-6px,0)
      				}

      				to {
      					transform: translate3d(0,-16px,0);
      					opacity: 1
      				}
      			}
      			@keyframes fadeOutDown {
      				from {
      					transform: translate3d(0,-16px,0);
      				}

      				to {
      					transform: translate3d(0,-6px,0);
      					opacity: 0;
      				}
      			}
      			@-webkit-keyframes fadeOutDown {
      				from {
      					transform: translate3d(0,-16px,0);
      				}

      				to {
      					transform: translate3d(0,-6px,0);
      					opacity: 0;
      				}
      			}

      			.animated {
      				animation-duration: 280ms;
      				animation-fill-mode: both;
      				-webkit-animation-duration: 280ms;
      				-webkit-animation-fill-mode: both;
      			}

      			.fadeInUp {
      				opacity: 0;
      				animation-name: fadeInUp;
      				-webkit-animation-name: fadeInUp;
      			}
      			.fadeOutDown {
      				opacity: 1;
      				animation-name: fadeOutDown;
      				-webkit-animation-name: fadeOutDown;
      			}
      		  </style>
		    `);
    }

    observer({addedNodes}) {

        if (addedNodes.length && addedNodes[0].classList && addedNodes[0].classList.contains('chat') ||
            addedNodes.length && addedNodes[0].classList && addedNodes[0].classList.contains('markup') ||
            addedNodes.length && addedNodes[0].classList && addedNodes[0].classList.contains('message') ||
            addedNodes.length && addedNodes[0].classList && addedNodes[0].classList.contains('message-sending') ||
            addedNodes.length && addedNodes[0].classList && addedNodes[0].classList.contains('hide-overflow') ||
            addedNodes.length && addedNodes[0].classList && addedNodes[0].classList.contains('messages-wrapper')) {

            //  load password from local storage
            function load_password() {
                var localStorageEncryption = localStorage.discordEncryption ? JSON.parse(localStorage.discordEncryption) : {};
                return localStorageEncryption["password"];
            }

            //  encrypt message using set password - add an encryption prefix for identification
            function msg_enc(msg_original) {
                var msg_enc = sjcl.encrypt(shared_password, msg_original, {
                        count: 2048,
                        ks: 256
                    }),
                    msg_final = "--aes256-encrypted-message--" + String(msg_enc);
                return msg_final;
            }

        }
    }


    getName() {
        return 'Encryption';
    }

    getAuthor() {
        return 'Charlie';
    }

    getVersion() {
        return '1.1.0';
    }

    getDescription() {
        return 'aes-256 encryption';
    }
};