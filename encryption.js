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