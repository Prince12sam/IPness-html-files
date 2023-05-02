(function () {
    var options = {
        whatsapp: "+1 689 267 3697", // WhatsApp number
        call_to_action: "Message us", // Call to action
        button_color: "#FF6550", // Color of button
        position: "left", // Position may be 'right' or 'left'
    };
    var proto = 'https:', host = "getbutton.io", url = proto + '//static.' + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();