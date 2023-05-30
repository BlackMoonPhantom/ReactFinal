import { Card } from '../Card';
import { Thumbnail } from '../Thumbnail';
import { Link } from 'react-router-dom';
import { Product } from '../../types/Product';

interface Props {
  product: Product;
}

export const ProductListRow = ({ product }: Props) => {
  return (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '25%',
        alignItems: 'center',
      }}
    >
      <Thumbnail description={product.description} image={product.image} width ={200}/>
      <Link key={product.id} to={`${product.id}`} style={{ fontSize: '20px' }} >
        {product.title}
      </Link>
    </Card>
  );
};
