import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
 
const steps = [
    {
        id: '0',
        message: 'Hello User!',
        trigger: '1',
    },
    {
        id: '1',
        message: 'As per our policy please provide you contact number first',
        trigger: '2'
    },
 
    {
        id: '2',
        user: true,
        trigger: '3',
    },
   
    {
        id: '3',
        message: 'Please write your username',
        trigger: '4'
        },
 
        {
            id: '4',
            user: true,
            trigger: '5',
        },
 
 
    {
        id: '5',
        message: " Hi {previousValue}, How may I help you?",
        trigger: '6'
    },
    {
        id: '6',
        options: [
            { value: 1, label: 'Delivery time', trigger: 7 },
            { value: 2, label: 'What dosage would you reccommend for this medicine', trigger: 8 },
            { value: 3, label: 'What are the hours of operation for Pharma-Easy', trigger: 9 },
            { value: 4, label: 'Where is the nearest pharmacy to my location?', trigger: 10 },
        ],
    },
    {
        id: '7',
        message: 'It takes less than 10 minutes to deliver the medicine to your doorstep',
        trigger: '6'
    },
    {
        id: '8',
        message: 'We would strongly reccommend you to fix an appointment with our docs on this issue ',
        trigger: '6',
    },
    {
        id: '9',
        message: '24x7 Online Support',
        trigger: '6',
    },
    {
        id: '10',
        message: 'Turn on your live location so that we could find you our nearest pharmacy location',
        trigger: '7',
    },
];
 
const theme = {
    background: 'green',
    headerBgColor: 'green',
    headerFontSize: '20px',
    botBubbleColor: 'white',
    headerFontColor: 'white',
    botFontColor: 'black',
    userBubbleColor: 'green',
    userFontColor: 'white',
};
 
const config = {
    botAvatar: "./logo_PE.png",
    floating: true,
};
 
function ChatBotPharmaEasy() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <ChatBot
                    headerTitle="Bot"
                    steps={steps}
                    {...config}
                />
            </ThemeProvider>
        </div>
    );
}
 
export default ChatBotPharmaEasy;