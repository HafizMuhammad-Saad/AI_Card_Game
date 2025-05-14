import Box from '@mui/material/Box';
import Card from '@mui/material/Card';


// import { Label } from 'src/components/label';
// import { ColorPreview } from 'src/components/color-utils';

// ----------------------------------------------------------------------

export type ProductItemProps = {
  id: string;
  name: string;
  price: number;
  status: string;
  coverUrl: string;
  colors: string[];
  priceSale: number | null;
};

export function ProductItem({ product }: { product: ProductItemProps }) {
  // const renderStatus = (
  //   <Label
  //     variant="inverted"
  //     color={(product.status === 'sale' && 'error') || 'info'}
  //     sx={{
  //       zIndex: 9,
  //       top: 16,
  //       right: 16,
  //       position: 'absolute',
  //       textTransform: 'uppercase',
  //     }}
  //   >
  //     {product.status}
  //   </Label>
  // );

  const renderImg = (
    <Box
      component="img"
      alt={product.name}
      src={product.coverUrl}
      sx={{
        position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: 1,
      }}
    />
  );

  // const renderPrice = (
  //   <Typography variant="subtitle1">
  //     <Typography
  //       component="span"
  //       variant="body1"
  //       sx={{
  //         color: 'text.disabled',
  //         textDecoration: 'line-through',
  //       }}
  //     >
  //       {product.priceSale && fCurrency(product.priceSale)}
  //     </Typography>
  //     &nbsp;
  //     {fCurrency(product.price)}
  //   </Typography>
  // );

  return (
    <Card sx={{ height: 300, // fixed height
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 2,}}> {/*add height*/}
      <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
        {/* {product.status && renderStatus} */}
        {renderImg}
      </Box>

      {/* <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
          {product.name}
        </Link>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <ColorPreview colors={product.colors} />
          {renderPrice}
        </Box>
      </Stack> */}
    </Card>
  );
}
