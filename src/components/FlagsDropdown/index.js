import React, { useState } from "react";
import * as flags from "country-flag-icons/string/3x2";
import { COUNTRIES_CODE } from "./constants";
import { Select } from "antd";
import "./dropdown.scss";
const { Option } = Select;

export const FlagsDropdown = () => {
  const [countryName, setCountryName] = useState('United States')
  return (

    <Select
      defaultValue={countryName}
      className="dropdown-width"
      onChange={(countryName) => {
        setCountryName(countryName);
      }}
      showSearch
      placeholder="Select Country"
      optionFilterProp="children"
      filterOption={(input, option) =>
        option.value?.toLowerCase().search(input.toLowerCase()) != -1
      }
    >
      {COUNTRIES_CODE.map((country) => (
        <Option key={country.code} value={country.name}>
          <div
            style={{ width: 15, height: 15, display: "inline-block" }}
            dangerouslySetInnerHTML={{
              __html: flags?.[country.code] + ' &nbsp;&nbsp;' + country?.name ?? '',
            }}
          />
        </Option>
      ))}
    </Select>
  );
};
