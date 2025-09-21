function AccordionItem({question, answer, isOpen, onToggle}){
    return(
        <div className="accordion-item" >
            <h3 className={`accordion-title ${(isOpen)? "active":""}`} onClick={onToggle}>{question}</h3>
            {isOpen && <div className="accordion-content">{answer}</div>}
        </div>
    );
}

export default AccordionItem;