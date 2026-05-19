import { useState } from "react";

function TestComp() {
    const [count, setCount] = useState(0);

    const onIncrease = () => {  // 상태 변화 코드 : count 1 증가
        setCount(count + 1);
    };

    const onDecrease = () => {  // 상태 변화 코드 : count 1 감소
        setCount(count - 1);
    };

    return(
        <div>
            <h4>테스트 컴포넌트</h4>
            <div>
                <bold>{count}</bold>
            </div>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
}
export default TestComp;