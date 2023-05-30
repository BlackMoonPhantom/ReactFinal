import { useNavigate, useParams } from 'react-router-dom';
import { useFetchProduct } from '../../hooks/products/useFetchProduct';
import { Spinner } from '../Spinner';
import { Card } from '../Card';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export const ProductDetail = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { data: product, loading, error } = useFetchProduct(productId);
  const { theme, toggleTheme } = useContext(ThemeContext); // Accessing the theme and toggleTheme from the context

  const handleGoBackClick = () => {
    navigate('/products');
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>There was an error</p>;
  }

  return (
    <Card style={{ background: theme.background, color: theme.foreground }}>
      <div className="product-detail-container">
        {product && (
          <>
            <img
              style={{ flex: 1 }}
              width={200}
              alt={product.title}
              src={product.image}
            />
            <div className="product-details">
              <strong>{product?.title}</strong>
              <p>{product?.category}</p>
              <p>{product?.description}</p>
            </div>
          </>
        )}
      </div>
      <button
        style={{ alignItems: 'flex-end', marginTop: '15px' }}
        onClick={handleGoBackClick}
      >
        Go back
      </button>
      <button
        style={{ marginTop: '15px' }}
        onClick={toggleTheme} // Toggle the theme on button click
      >
        Dark Mode
      </button>
    </Card>
  );
};
