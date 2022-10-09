function message(messageType = "failure", nessage= "You have encountered an error in fetching the details") {
    return `<div class="notice ${messageType}">${message}<div>`;