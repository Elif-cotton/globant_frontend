import styles from "../components/Thumbs.module.css";
import { useState } from 'react'; // Importa el hook useState

interface Product {
  images: string[];
}

interface Props {
  product: Product;
}

function Thumbs({ product }: Props) {
  const [thumb, setThumb] = useState<string>(product.images[0]);

    return <>
          <div>
                <div className="product-images-block">
                    {/* Mapea sobre las miniaturas y configura el evento onClick para cambiar el estado thumb */}
                    {product.images.map((image, index) => (
                        <div key={index} className="thumbnail-container">
                            <img
                                className={styles.thumbnail}
                                src={image}
                                alt={image}
                                onClick={() => setThumb(image)}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="thumbnail-container">
                {/* Configura el atributo src de la imagen principal para mostrar la imagen almacenada en el estado thumb */}
                <img id="selected-thumbnail" src={thumb} alt="" />
            </div>
    </>
}

export default Thumbs;