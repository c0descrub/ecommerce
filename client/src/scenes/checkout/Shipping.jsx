import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { validateYupSchema } from "formik";
import AddressForm from "./AddressForm";

const Shipping = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
}) => {
  return (
    <Box m="30px auto">
      <Box>
        <Typography sx={{ mb: "15px", fontSize: "18px" }}>
          Billing Information
        </Typography>
        <AddressForm
          type="billingAddress"
          values={values.billingAddress}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </Box>
      <Box mb="20px">
        <FormControlLabel
          label="Same as Shipping Addess"
          control={
            <Checkbox
              defaultChecked
              value={values.shippingAddress.isSameAddress}
              onChange={() =>
                setFieldValue(
                  "shippingAddress.isSameAddress",
                  !values.shippingAddress.isSameAddress
                )
              }
            />
          }
        />
      </Box>
      {!values.shippingAddress.isSameAddress && (
        <Box>
          <Typography sx={{ mb: "15px", fontSize: "18px" }}>
            Shipping Information
          </Typography>
          <AddressForm
            type="shippingAddress"
            value={values.shippingAddress}
            errors={values.errors}
            touched={values.touched}
            handleBlur={values.handleBlur}
            handleChange={values.handleChange}
          />
        </Box>
      )}
    </Box>
  );
};

export default Shipping;
