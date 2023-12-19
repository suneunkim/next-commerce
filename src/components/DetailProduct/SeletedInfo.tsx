import { IProductDetail } from "@/pages/product/[id]";
import React, { useEffect, useState } from "react";
import QuantityButton from "./QuantityButton";
import { SetterOrUpdater } from "recoil";

interface ListProps {
  value: string;
  quantity: number;
  price: number;
  label: string;
  imageUrl: string;
}

interface DetailProductInfoProps {
  product: IProductDetail;
  selectedList: ListProps[];
  setSelectedList: SetterOrUpdater<ListProps[]>;
}

const options = [
  { value: "option1", label: "산양유 스틱 4개입", price: 4000 },
  { value: "option2", label: "산양유 스틱 20개입 (+12,900원)", price: 16900 },
  {
    value: "option3",
    label: "산양유 스틱 20개입 트리플세트(3팩) (+36,900원)",
    price: 40900,
  },
];

const SeletedInfo = ({
  product,
  selectedList,
  setSelectedList,
}: DetailProductInfoProps) => {
  // selete 태그 tartget.value 확인용
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    console.log(selectedList);
  }, [selectedList]);

  // selectedList에 선택한 옵션 추가하기 선택한 옵션 리스트 보여주기
  const handleSelectChange = (e: any) => {
    const newValue = e.target.value;
    setSelectedValue(newValue);
    setSelectedList((prev: ListProps[]) => {
      const selectedOption = options.find(
        (option) => option.value === newValue
      );
      if (selectedOption) {
        return [
          ...prev,
          {
            ...selectedOption,
            quantity: 1,
            label: selectedOption.label,
            imageUrl: product.imageUrl[0],
          },
        ];
      }
      return prev;
    });
  };
  // 선택한 옵션 리스트에서 삭제하기
  const removeSelectedItem = (seletedOption: string) => {
    setSelectedList((prev: ListProps[]) =>
      prev.filter((item) => item.value !== seletedOption)
    );
  };

  // 총합 구하기
  const calculateTotalAmount = () => {
    return selectedList.reduce((acc, selectedOption) => {
      const totalAmout = selectedOption.quantity * selectedOption.price;
      return acc + totalAmout;
    }, 0);
  };

  return (
    <section>
      <div>
        <div className="font-semibold text-2xl py-2 border-b">
          {product?.price.toLocaleString("ko-KR")}원
        </div>
        <div className="flex mt-3">
          <div className="w-32 text-sm text-gray-700 flex items-center">
            옵션
          </div>
          <select
            className="w-full border text-sm py-2"
            name="selectedOption"
            onChange={handleSelectChange}
            value={selectedValue}
          >
            <option value="">필수! 옵션을 선택해주세요</option>
            <option disabled>옵션</option>
            {options.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="text-xs py-3 text-red-500">
        ❗️ 위 옵션선택 박스를 선택하시면 아래에 상품이 추가됩니다.
      </p>
      <div>
        {selectedList.length > 0 ? (
          <ul>
            {selectedList.map((selectedOption, index) => {
              const selected = options.find(
                (option) => option.value === selectedOption.value
              );
              if (selected) {
                const quantity = selectedOption.quantity || 1;
                const tatalAmout = quantity * selected.price;

                return (
                  <li
                    className="grid grid-cols-[1fr,1.2fr] text-sm py-4 border-t"
                    key={index}
                  >
                    <div className="flex items-center text-xs text-zinc-500 font-semibold">
                      {selected.label}
                    </div>
                    <div className="grid grid-cols-[1.5fr,1fr,1fr]">
                      <div className=" inline-block">
                        <QuantityButton
                          selected={selected}
                          quantity={quantity}
                          setSelectedList={setSelectedList}
                        />
                      </div>

                      <button
                        onClick={() => removeSelectedItem(selectedOption.value)}
                        className="border w-8 ml-4 aspect-square flex items-center justify-center"
                      >
                        X
                      </button>

                      <div className="relative flex items-center font-semibold">
                        <span className="absolute right-0">
                          {tatalAmout.toLocaleString("ko-KR")}원
                        </span>
                      </div>
                    </div>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        ) : (
          ""
        )}
      </div>
      <div className="flex items-end mt-5">
        <p className="text-sm font-medium">총 상품금액 :</p>
        <div className="text-xl font-semibold pl-2">
          {calculateTotalAmount().toLocaleString("ko-KR")}원
        </div>
      </div>
    </section>
  );
};

export default SeletedInfo;
