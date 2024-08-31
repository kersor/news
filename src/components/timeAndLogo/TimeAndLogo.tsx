// src/TimeAgo.js
import React, { FC } from 'react';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import { IPost } from '../../types';

interface ITimeAndLogo {
    lstNewOnePost: IPost,
    more: boolean
}

const TimeAndLogo: FC<ITimeAndLogo> = ({ lstNewOnePost, more }) => {
  const date = parseISO(lstNewOnePost.publishedAt || '');
  const timeAgo = formatDistanceToNow(date, { addSuffix: true, locale: ru });

  const url = lstNewOnePost.url?.slice(8).split('/')[0]
  let logo = ''
  if(url) logo = `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${url}`

  return (
    <div>
      {
        more
        ?
        <div className='flex items-center gap-[5px] mt-[5px]'>
            {
                url && <img className='w-[12px]' src={logo} alt="" />
            }
            <div className="text-[12px] text-[#474747] font-semibold max-[900px]:text-[12px] max-[600px]:hidden">{lstNewOnePost.source.name}</div>
            <div className='w-[3px] h-[3px] rounded bg-[silver]'></div>
            <div className='text-[12px] max-[900px]:text-[11px]'>{timeAgo}</div>
        </div>
        :
        <div className='flex items-center gap-[10px]'>
            {
                url && <img src={logo} alt="" />
            }
            <div className="text-[14px] text-[#474747] font-semibold max-[900px]:text-[12px]">{lstNewOnePost.source.name}</div>
            <div className='w-[3px] h-[3px] rounded bg-[silver]'></div>
            <div className='max-[900px]:text-[12px]'>{timeAgo}</div>
        </div>
      }
    </div>
  );
};

export default TimeAndLogo;
