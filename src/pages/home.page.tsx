import "../assets/styles/home.scss"

const HomePage: React.FC = () => {
    return (
        <div>
            <h2>Olá, sinta-se em casa!</h2>
            <p>A sapataria online que eleva seu estilo!</p>

            <div className="gallery-container">
                <div className="gallery">
                    <img src="https://i.pinimg.com/564x/5c/8f/0f/5c8f0f74a61f427b650b8eb902ad036a.jpg" alt="Sapato nas pedrinhas" />
                    <img src="https://i.pinimg.com/564x/9a/30/5a/9a305ae180decf11bf6869deb9d1713e.jpg" alt="Sapato no monumento" />
                    <img src="https://i.pinimg.com/564x/ea/f5/a7/eaf5a721627c27922cec2f8fb7f57ce8.jpg" alt="Sapatenis ar livre" />
                    <img src="https://i.pinimg.com/564x/ac/92/c1/ac92c18e84efe15f7022b6fd8f733a02.jpg" alt="Sapatenis caixa" />
                </div>

            </div>
        </div>
    )
}

export default HomePage