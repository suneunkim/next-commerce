// recoil.js
import { atom, selector } from "recoil";

const initialCartData =
  typeof window !== "undefined" && localStorage.getItem("cartData");
const initialList = initialCartData
  ? JSON.parse(initialCartData).storedList
  : [];
// index의 ProductList와 Nav의 category
export const seletedCategoryState = atom({
  key: "seletedCategoryState",
  default: "ALL",
});
// Container에서 display fixed 조건부 사용 중 (mobile Nav 열렸을 때 스크롤 막기)
export const showMenuState = atom({
  key: "showMenuState",
  default: false,
});
// 상품 선택 옵션
export const seletedOptionsState = atom<
  {
    value: string;
    quantity: number;
    price: number;
    label: string;
    imageUrl: string;
  }[]
>({
  key: "seletedOptionsState",
  default: initialList,
});

// 카운트 다운을 위해서 만들어 본 것들
export const searchOpenState = atom({
  key: "searchOpenState",
  default: false,
});

const startDate = new Date("2023-12-08T09:00:00.000Z");
const endDate = new Date(startDate.getTime() + 14 * 24 * 60 * 60 * 1000);
// 이벤트의 시작 시간과 종료 시간을 관리하는 원자
export const eventStartTimeAtom = atom({
  key: "eventStartTime",
  default: startDate, // 이벤트 시작 시간
});

export const eventEndTimeAtom = atom({
  key: "eventEndTime",
  default: endDate,
  // 이벤트 종료 시간 (현재 시간으로부터 30일 후로 설정)
});

// 현재 시간을 기반으로 남은 시간을 계산하는 선택자
export const remainingTimeSelector = selector({
  key: "remainingTime",
  get: ({ get }) => {
    const endTime = get(eventEndTimeAtom);
    const currentTime = get(getServerTime);

    let timeDiff = endTime.getTime() - currentTime.getTime();

    if (timeDiff < 0) {
      timeDiff = 0;
    }

    const days = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
    const hours = Math.floor(
      (timeDiff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
    );
    const minutes = Math.floor((timeDiff % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((timeDiff % (60 * 1000)) / 1000);

    return { days, hours, minutes, seconds };
  },
});

export const getServerTime = selector({
  key: "getServerTime",
  get: async () => new Date(), // 서버 측에서 현재 시간을 반환
  dangerouslyAllowMutability: true, // 필요한 경우 사용 (Recoil이 비동기 값을 다룰 때)
});
