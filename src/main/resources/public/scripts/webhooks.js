$(function () {

    $.getJSON("list-webhook-notifications", function (data) {
        var notifications = [];
        $.each(data, function (key, val) {
            notifications.push("<tr><th scope=\"row\">" + val.timestamp + "</th><td>" + val.orderId + "</td><td>" + val.transactionId + "</td><td>" + val.orderStatus + "</td><td>" + val.amount + "</td></tr>");
        });

        console.log("##### Notifications = ", notifications);
        if (notifications.length == 0) {
            var notificationUrl = window.location.href.substring(0, window.location.href.lastIndexOf('/'));
            var noNotificationText = "No notifications found, please configure the url - '" + notificationUrl + "' in merchant settings to receive notifications.";

            $('.no-notification').append(noNotificationText).removeClass('invisible');
        }
        else {
            $('.notifications').append(notifications).removeClass('invisible');
        }
    });
});