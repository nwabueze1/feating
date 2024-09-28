export type HandleSend = (data: {
    name: string;
    email: string;
    phoneNo: string;
    "how did you find us": string;
}, client: {
    type: "emailjs";
    credentials: {
        [key: string]: string;
    };
}) => Promise<void>;
