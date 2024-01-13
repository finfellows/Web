'use client';

import React, { useEffect, useState } from 'react';
import CmaGuide from '../../_components/CmaGuide';
import CmaInfoGuide from '../../_components/CmaInfoGuide';
import { TgetCmaIdApiResponse } from '@/types/financial-productsTypes';
import { getCmaIdApi } from '@/api/cmaApi';
import { postBankBookmarkApi, deleteBankBookmarkApi } from '@/api/financial-productsApi';

const Des = ({ params }: { params: { id: number } }) => {
  const [cmaInfo, setCmaInfo] = useState<TgetCmaIdApiResponse | undefined>();
  const [isLiked, setIsLiked] = useState(false);

  const cmaFetchData = async () => {
    try {
      const data = await getCmaIdApi(params.id);
      if (data) {
        setCmaInfo(data);
        setIsLiked(data.isLiked);
      }
    } catch (error) {
      console.error('Error fetching cmaFetchData:', error);
    }
  };

  useEffect(() => {
    cmaFetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onHeartClick = async (id: number, isLiked: boolean) => {
    try {
      if (isLiked) {
        await deleteBankBookmarkApi(id);
      } else {
        await postBankBookmarkApi(id);
      }
      setIsLiked(!isLiked);
    } catch (error) {
      console.error('Error fetching bankBookmark:', error);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      {cmaInfo && (
        <>
          <CmaGuide
            isLiked={isLiked}
            productName={cmaInfo.productName}
            bankName={cmaInfo.bankName}
            rate={cmaInfo.maturityInterestRate}
            onHeartClick={() => onHeartClick(params.id, cmaInfo.isLiked)}
          />
          <div className='mt-25 px-15 py-17 w-342 gap-20 border rounded-8 tablet:w-438 tablet:py-22 tablet:px-20 tablet:rounded-10 tablet:mt-32 desktop:mt-63 desktop:py-44 desktop:px-40 desktop:w-855 desktop:gap-63 desktop:rounded-20 desktop:border-2 border-border02 dark:border-dark-border02 bg-secondary dark:bg-dark-secondary'>
            <CmaInfoGuide data={['글자', '글자']} />
          </div>
        </>
      )}
    </div>
  );
};
export default Des;
