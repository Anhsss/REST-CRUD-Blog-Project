import { ChangeEvent, Dispatch, SetStateAction, forwardRef } from 'react'
import './style.css';

//          interface: Input Box Properties        //
interface Props {
    label: string;
    type: 'text' | 'password';
    placeholder: string;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    error: boolean;

    icon?: string;
    onButtonClick?: () => void;
}

//          component: Input Box 컴포넌트        //
const InputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {

 //          state: properties        //
 const { label, type, placeholder, value, error, icon } = props;
 const { setValue, onButtonClick } = props;

 //          event handler: input 값 변경 이벤트 처리 함수        //
 const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
 }

 //          render: Input Box 렌더링        //
 return (
    <div className='inputbox'>
        <div className='inputbox-label'>{label}</div>
        <div className={error ? 'inputbox-container-error' : 'inputbox-container'}>
          <input type={type} className='input' placeholder={placeholder} value={value} onChange={onChangeHandler} />
          {onButtonClick !== undefined && (
          <div className='icon-button'>
          {icon !== undefined && (<div className={`icon ${icon}`}></div>)}
        </div>
        )}
        </div>
        <div className='inputbox-message'>{'비밀번호는 8자 이상 입력해주세요.'}</div>
    </div>
 )

});

export default InputBox;
