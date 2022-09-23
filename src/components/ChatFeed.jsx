import MessageForm from './MessageForm';
import RecievedMessage from './RecievedMessage';
import SentMessage from './SentMessage';

const ChatFeed = (props) => {
const { chats, activeChat, userName, messages } = props;

const chat = chats && chats[activeChat];


//Read Receipts function
const renderReadReceipts = (message, isSentMessage) => {
  return  chat.people.map((person, index) => person.last_read === message.id && (
        <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
                float: isSentMessage ? 'right' : 'left',
                backgroundImage: `url(${person?.person?.avatar})`
            }}
         />
    ))
}

// Rendering messages & receipts
const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
        const message = messages[key];
        const lastMessageKey = index === 0 ? null : keys[index - 1];
        const isSentMessage = userName === message.sender.username;

        return (
            <div key= {`msg_${index}`} style= {{ width: '100%' }}>
                <div className="message-block">
                {
                    isSentMessage
                    ? <SentMessage message={message} />
                    : <RecievedMessage message={message} lastMessage={messages[lastMessageKey]} />
                }
                </div>
                <div className= "read-receipts" style={{ marginRight: isSentMessage ? '18px' : '0px' , marginLeft: isSentMessage ? '0px' : '68px'}}>
                    {renderReadReceipts (message, isSentMessage)}
                </div>
            </div>
        )
    })

}
// display message if/when chat data is loading
if(!chat) return 'Loading...';

// display everything declared
return (
     <div className="chat-feed">
        <div className="chat-title-container">
            <div className="chat-title">{chat?.title}</div>
            <div className="chat-subtitle">
                {chat.people.map((person) => `${person.person.username}`)}
            </div>
        </div>
        {renderMessages()}
        <div style={{ height: '100px' }} />
        <div className="message-form-container">
            <MessageForm {... props} chatId={activeChat} />
        </div>
    </div>
)}

export default ChatFeed;