function BusinessCard(){
    const name = "Магдесян Кирилл";
    const profession = "Программист";
    const email = "magdesyankirill@gmail.com";
    return (
        <div className="business-card">
            <h3>{name}</h3>
            <p>{profession}</p>
            <p>{email}</p>
        </div>
    );
}
export default BusinessCard