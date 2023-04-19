import React from 'react';
import Logo from 'svg/logo';
import Link from 'next/link';
import useProjects from '@/utils/useProjects';
import { useRouter } from 'next/router';

export default function Navbar() {
  const projects = useProjects();
  const totalNumberOfProjects = projects.length;
  const totalEarningsUSD = projects.reduce((sum: number, project: any) => {
    return sum + (project.fields['Total Earnings USD'] || 0);
  }, 0);

  const router = useRouter();

  return (
    <>
      <div className="border-b border-[#1C2430] py-6 lg:py-8">
        <div className="mx-auto flex w-[96%] max-w-[1200px] items-center">
          <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-center">
            <div
              className="h-[21px] w-[159px] cursor-pointer"
              onClick={() => router.push('/')}
            >
              <Logo />
            </div>
            <div className="flex gap-2">
              <p className="rounded-full border border-[#212945] bg-[#191F34]  py-[0.35rem] px-4 text-sm font-semibold text-[#9EAEC7]">
                Earnings:{' '}
                <span className="text-[#F6A50B]">${totalEarningsUSD}</span>
              </p>
              <p className="rounded-full border border-[#212945] bg-[#191F34] py-[0.35rem] px-4 text-sm font-semibold text-[#9EAEC7]">
                Projects:{' '}
                <span className="text-[#F6A50B]">{totalNumberOfProjects}</span>
              </p>
            </div>
          </div>
          <div className="hidden gap-8 whitespace-nowrap lg:flex">
            <Link href="/projects" className="text-white">
              <p className="text-[1.1rem] font-medium">Projects</p>
            </Link>
            <Link href="/rainmakers" className="text-white">
              <p className="text-[1.1rem] font-medium">Rainmakers</p>
            </Link>
            <Link href="/sponsors" className="text-white">
              <p className="text-[1.1rem] font-medium">Sponsors</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}