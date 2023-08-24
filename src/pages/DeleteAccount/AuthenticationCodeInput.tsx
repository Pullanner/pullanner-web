import { useAtom, useSetAtom, useAtomValue } from 'jotai';
import { useState, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { deleteAccountWithAuthenticationCode } from '@/apis/user/deleteAccountWithAuthenticationCode';
import { Modal } from '@/components/Modal';
import { ModalButton } from '@/components/Modal/ModalButton';
import { MainText, SubText, ModalText } from '@/components/Modal/ModalText';
import { ROUTE_PATH } from '@/constants';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { isTimerActiveAtom } from '@/stores/atoms/isTimerActiveAtom';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { userDataAtom } from '@/stores/atoms/userDataAtom';

import {
  MAX_INPUT_LENGTH,
  TEXT_CONTENTS,
  BUTTON_STATE,
  VALIDATE_CODE_BUTTON_STYLE,
  LIMIT_TIME,
} from './constants';
import { Timer } from './Timer';

import type { ChangeEvent, ForwardedRef } from 'react';

export const AuthenticationCodeInput = forwardRef<HTMLInputElement>(
  (_, ref: ForwardedRef<HTMLInputElement>) => {
    const [authenticationCode, setAuthenticationCode] = useState('');
    const [isDeleteAccountButtonActive, setDeleteAccountButtonActive] = useState(false);
    const [isDeleteRequestFailed, setShowInvalidAuthenticationCodeDescription] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
    const setLoginState = useSetAtom(loginStateAtom);
    const setUserData = useSetAtom(userDataAtom);
    const isTimerActive = useAtomValue(isTimerActiveAtom);
    const navigate = useNavigate();

    const deleteAccountButtonState = isDeleteAccountButtonActive
      ? BUTTON_STATE.active
      : BUTTON_STATE.inactive;

    const handleDeleteAccountButtonClick = async () => {
      if (!isDeleteAccountButtonActive) {
        return;
      }

      const isAuthenticationCodeVaild = await deleteAccountWithAuthenticationCode(
        authenticationCode,
        accessToken,
        setAccessToken,
      );

      if (isAuthenticationCodeVaild) {
        setShowModal(true);
      } else {
        setShowInvalidAuthenticationCodeDescription(true);
      }
    };

    const handleInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      const inputNumberValue = value.replace(/[^0-9]/g, '');
      setAuthenticationCode(inputNumberValue);
      setShowInvalidAuthenticationCodeDescription(false);

      setDeleteAccountButtonActive(inputNumberValue.length === MAX_INPUT_LENGTH);
    };

    const handleOkButtonClick = () => {
      setShowModal(false);
      setLoginState(false);
      setUserData(null);
      navigate(ROUTE_PATH.roadmap.index);
    };

    return (
      <div className="pt-6">
        <div className="flex h-11 items-center justify-between rounded-[0.313rem] bg-[#161616] px-2.5">
          <input
            id="authenticationCode"
            type="text"
            className="w-[9.25rem] bg-transparent text-base placeholder:text-[#8D8D8D] focus:bg-transparent focus:outline-none"
            maxLength={MAX_INPUT_LENGTH}
            value={authenticationCode}
            ref={ref}
            onChange={handleInputChange}
            placeholder="인증코드 6자리 입력"
            aria-label="authenticationCode"
            aria-describedby="valdationResult"
          />
          {isTimerActive && <Timer limitTime={LIMIT_TIME} />}
          <button
            type="button"
            className={`h-[1.875rem] w-[4.5rem] rounded-[0.313rem] text-base ${VALIDATE_CODE_BUTTON_STYLE[deleteAccountButtonState]}`}
            onClick={handleDeleteAccountButtonClick}
          >
            회원탈퇴
          </button>
        </div>
        {isDeleteRequestFailed && (
          <p id="valdationResult" className="pt-3 text-sm text-[#FF5E62]">
            {TEXT_CONTENTS.invalidAuthenticationCodeDescription}
          </p>
        )}
        {showModal && (
          <Modal>
            <ModalText>
              <MainText textStyle="border-b-2 border-[#686868] py-5">
                {TEXT_CONTENTS.modal.main}
              </MainText>
              <SubText textStyle="pt-6 pb-7">
                {TEXT_CONTENTS.modal.sub.map((text) => {
                  return <p key={text}>{text}</p>;
                })}
              </SubText>
            </ModalText>
            <ModalButton text="확인" handler={handleOkButtonClick} isPrimary />
          </Modal>
        )}
      </div>
    );
  },
);
