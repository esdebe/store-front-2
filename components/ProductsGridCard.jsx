/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { ClassNames } from '@emotion/react'
import StarRating from '@components/StarRating'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import ButtonBase from '@material-ui/core/ButtonBase'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import HeartIcon from '@components/icons/Heart'
import ShoppingBagIcon from '@components/icons/ShoppingBagFill'

function ProductsGridCard(props) {
  const { product } = props
  return (
    <ClassNames>
      {({ css }) => (
        <Card
          classes={{
            root: css`
              &.MuiCard-root {
                position: relative;
                box-shadow: none;
              }
              & .MuiCardContent-root {
                padding: 0;
              }
              & .MuiCardMedia-container {
                position: relative;
              }
              & .MuiCardMedia-action {
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
              }
              & .MuiCardMedia-action:hover {
                background-color: rgba(0, 0, 0, 0.2);
              }
              & .MuiCardMedia-action .MuiButtonBase-root,
              & .MuiCardMedia-action .MuiIconButton-root {
                display: none;
              }
              & .MuiCardMedia-action:hover .MuiButtonBase-root,
              & .MuiCardMedia-action:hover .MuiIconButton-root {
                display: flex;
              }
              & .MuiCardMedia-action {
                & .wishList {
                  position: absolute;
                  top: 15px;
                  right: 15px;
                  color: #ef6c57;
                  &:hover {
                    color: white;
                  }
                }
                & .cart {
                  position: absolute;
                  top: 52px;
                  right: 15px;
                  color: #556fb5;
                  &:hover {
                    color: white;
                  }
                }
                & .cart-checkout {
                  font-family: Poppins;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 27px;
                  letter-spacing: 0em;
                  text-align: center;
                  color: #ffffff;
                  background-color: #556fb5;
                  width: 100%;
                  position: absolute;
                  bottom: 0;
                  padding: 16px 0;
                }
              }
            `,
          }}
        >
          <div className="MuiCardMedia-container">
            <CardMedia
              component="img"
              image={product.img}
              title={product.title}
            />
            <div className="MuiCardMedia-action">
              <IconButton className="wishList" size="small">
                <HeartIcon />
              </IconButton>
              <IconButton className="cart" size="small">
                <ShoppingBagIcon />
              </IconButton>
              <ButtonBase className="MuiCardMedia-action-button cart-checkout">
                Beli Sekarang
              </ButtonBase>
            </div>
          </div>
          <CardContent>
            <Typography variant="productGridTitle">{product.title}</Typography>
            <Typography variant="productGridTitle">{product.unit}</Typography>
            <Typography variant="productGridTitle">{product.price}</Typography>
            <StarRating />
            <p>{product.text}</p>
          </CardContent>
        </Card>
      )}
    </ClassNames>
  )
}

export default ProductsGridCard
