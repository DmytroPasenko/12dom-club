import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { box, table, tdPrice, tdTitle } from "./ProductQuality.module.scss";

interface ProductQualityRecord {
  name: string;
  metering: string;
  value: string;
  limit: string;
}

interface ProductQualityProps {
  data: ProductQualityRecord[];
}

const ProductQuality: FunctionComponent<ProductQualityProps> = ({ data }) => {
  const { t } = useTranslation(["product"]);

  return (
    <div>
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className={box}>
            <table className={table}>
              <tbody>
                {data?.map((item, idx) => (
                  <tr key={idx}>
                    <td className={tdTitle}>{t(`product:${item.name}`)}</td>
                    <td className={tdPrice}>
                      {`${item.value}${t(`product:${item.metering}`)} ${t(
                        `product:${item.limit}`,
                      )}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuality;
