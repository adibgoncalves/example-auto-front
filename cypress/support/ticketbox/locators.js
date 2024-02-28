const locators = {
    FORM: {
        FIRST_NAME: {
            LABEL: "form > :nth-child(1) > :nth-child(1) > label",
            INPUT: "#first-name"
        },
        LAST_NAME: {
            LABEL: "form > :nth-child(1) > :nth-child(2) > label",
            INPUT: "#first-name"
        },
        EMAIL: {
            LABEL: "form > :nth-child(2) > :nth-child(1) > label",
            INPUT: "#email"
        },
        TICKET_QUANTITY: {
            LABEL: "form > :nth-child(3) > :nth-child(1) > label",
            SELECT: "#ticket-quantity"
        },
        TICKET_TYPE: {
            LEGEND: "form > :nth-child(3) > :nth-child(2) > legend",
            GENERAL_ADMISSION: "#general",
            VIP: "#vip"
        },
        ABOUT_EVENT: {
            LEGEND: "form > :nth-child(4) > :nth-child(1) > legend",
            FRIEND: "#friend",
            PUBLICATION: "#publication",
            SOCIAL_MEDIA: "#social-media",
        },
        SPECIAL_REQUEST: {
            LABEL: "form > :nth-child(5) > :nth-child(1) ",
            INPUT: "#requests"
        },
        PURCHASE_AGREEMENT: {
            LEGEND: "form > :nth-child(6) > :nth-child(1) > legend",
            TEXT: "form > :nth-child(6) > :nth-child(1) > p",
            INPUT: "form > :nth-child(6) > :nth-child(1) > input",
            LABEL: "form > :nth-child(6) > :nth-child(1) > label",
        },
        SIGNATURE: {
            LABEL: "form > :nth-child(7) > :nth-child(1)",
            INPUT: "#signature"
        },
        BUTTONS : {
            RESET: "form > :nth-child(8) > :nth-child(1)",
            CONFIRM_TICKETS: "form > :nth-child(8) > :nth-child(2)"
        }
    }
}

export default locators;