import React from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

export default function ChatTawk() {
    return (
        <>
            <TawkMessengerReact propertyId="63168cd954f06e12d892e781" widgetId="1gc81cciq" />
            {/*<TawkMessengerReact propertyId={process.env.PROPERTY_ID} widgetId={process.env.WIDGET_ID} />*/}
        </>
    );
}