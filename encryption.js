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

    }


};