import React from "react";
import { animated as a, useSpring } from "@react-spring/web";
import { ButtonComponent } from "../../../../components/button/button";

type Props = {};

const ListAddress = (props: Props) => {
  const Address = () => {
    return (
      <div className="text-left pt-2 ">
        <p
          className="form-row form-row-wide pl-1.5 "
          id="calc_shipping_country_field"
        >
          <select
            name="calc_shipping_country"
            id="calc_shipping_country"
            className="w-full py-2 border-2 border-gray-500"
          >
            <option value="">Chọn quốc gia…</option>
            <option value="AF">Afghanistan</option>
            <option value="EG">Ai Cập</option>
            <option value="AL">Albania</option>
            <option value="DZ">Algeria</option>
            <option value="AS">American Samoa</option>
            <option value="AD">Andorra</option>
            <option value="AO">Angola</option>
            <option value="AI">Anguilla</option>
            <option value="GB">Anh (UK)</option>
            <option value="AQ">Antarctica</option>
            <option value="AG">Antigua và Barbuda</option>
            <option value="AR">Argentina</option>
            <option value="AM">Armenia</option>
            <option value="AW">Aruba</option>
            <option value="AZ">Azerbaijan</option>
            <option value="BS">Bahamas</option>
            <option value="BH">Bahrain</option>
            <option value="BD">Bangladesh</option>
            <option value="BB">Barbados</option>
            <option value="BY">Belarus</option>
            <option value="PW">Belau</option>
            <option value="BZ">Belize</option>
            <option value="BJ">Benin</option>
            <option value="BM">Bermuda</option>
            <option value="BT">Bhutan</option>
            <option value="BO">Bolivia</option>
            <option value="BQ">Bonaire, Saint Eustatius và Saba</option>
            <option value="BA">Bosnia và Herzegovina</option>
            <option value="BW">Botswana</option>
            <option value="BR">Brazil</option>
            <option value="BN">Brunei</option>
            <option value="BG">Bulgaria</option>
          </select>
        </p>
        <p className="form-row form-row-wide py-3 pl-2" id="">
          <input
            type="text"
            className="border-2 w-full border-gray-500  py-1 "
            placeholder="Thành phố"
          />
        </p>
        <p className="form-row form-row-wide pl-2 py-3" id="">
          <input
            type="text"
            className="border-2 w-full border-gray-500  py-1"
            placeholder="Mã bưu điện"
          />
        </p>
        <p className="py-3">
          <ButtonComponent
            type="submit"
            customStyle="bg-red-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
          >
            Cập nhật
          </ButtonComponent>
        </p>
        <input
          type="hidden"
          id="woocommerce-shipping-calculator-nonce"
          name="woocommerce-shipping-calculator-nonce"
          defaultValue="6edcf45753"
        />
        <input
          type="hidden"
          name="_wp_http_referer"
          defaultValue="/converse/gio-hang/"
        />
      </div>
    );
  };

  const [greetingStatus, displayGreeting] = React.useState(false);
  const contentProps = useSpring({
    opacity: greetingStatus ? 1 : 0,
    marginTop: greetingStatus ? 1 : -50,
  }) as any;
  return (
    <div className="flex justify-between">
      <div className="grid place-items-center ">
        <span className="basis-1/2  text-left font-normal text-sm uppercase">
          Giao Hàng
        </span>
      </div>
      <div className="text-right w-4/6">
        <p>Giao hàng miễn phí.</p>
        <p>Ước tính Hà Nội, Việt Nam.</p>
        <button className="text-right" onClick={() => displayGreeting((a) => !a)}>
          Địa chỉ giao hàng
        </button>
        {!greetingStatus ? (
          <div className="Intro"></div>
        ) : (
          <a.div className="box" style={contentProps}>
            {greetingStatus && Address()}
          </a.div>
        )}
      </div>
    </div>
  );
};

export default ListAddress;
