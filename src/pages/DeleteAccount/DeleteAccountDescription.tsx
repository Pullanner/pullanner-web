import { useAtomValue } from 'jotai';

import { userDataAtom, UserData } from '@/stores/atoms/userDataAtom';

export const DeleteAccountDescription = () => {
  const { email } = useAtomValue(userDataAtom) as UserData;

  return (
    <ul className="list-inside list-disc pb-6 text-base">
      <li>
        <span className="font-bold">{`'인증 코드 전송하기'`}</span> 버튼을 클릭하면 가입 시 사용했던
        이메일 주소 <span className="font-bold">{`${email}`}</span>로 회원탈퇴를 위한 인증 코드를
        전송합니다.
      </li>
      <li>
        제한시간 <span className="font-bold">3분</span> 이내에 이메일로 전송된 인증 코드를 입력한 후
        <span className="font-bold">‘회원탈퇴’</span> 버튼을 클릭하면 회원 탈퇴가 정상 처리됩니다.
      </li>
    </ul>
  );
};
