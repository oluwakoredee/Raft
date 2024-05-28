/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { IoCashOutline } from "react-icons/io5";
import { BiCoinStack } from "react-icons/bi";
import data from "../assets/data.json";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Accordion from "./Accordion";
import Footer from "./Footer";

const Landing = () => {
  const [index, setIndex] = useState(0);
  console.log("index: ", index);
  const landing = data.landing;
  console.log(landing[index]);

  const handleClick = (index) => {
    setIndex(index);
  };
  return (
    <div className="roboto-regular bg-[rgba(7,6,6,1)] h-full text-white overflow-hidden ">
      <div className="flex pt-8 flex-col gap-4 ">
        <div className="flex text-center items-center xl:mx-[600px] justify-center py-2 mt-10 bg-[rgba(255,255,255,0.15)] text-[rgba(220,220,220,1)] mx-24 rounded-full">
          <p>Introducing Raft Cards</p>
          <MdNavigateNext />
        </div>
        <h1 className="flex text-center items-center justify-center text-[40px] mx-4 xl:mx-80 xl:px-40">
          Building the future of banking
        </h1>
        <p className="px-4 text-center  xl:mx-72 xl:px-56  items-center text-[rgba(189,189,189,1)]">
          Experience the future of banking with RAFT.We're here to empower your
          financial journey.
        </p>
        <p className=" bg-green-700 text-center xl:mx-[640px] xl:px-6 items-center mx-28 rounded-full  px-[32px] py-[16px]">
          Get Started
        </p>
      </div>
      <div className="mb-10">
        <img
          src="https://res.cloudinary.com/demmasgzp/image/upload/v1716300807/Raft/Frame_31_fkcvzs.png"
          className="mt-10 xl:w-[1460px] xl:h-[900px] xl:px-20  p-8"
          alt=""
        />
      </div>
      <div className="pb-10 px-8">
        <h1 className="text-center items-center w-174px h-19px text-16px text-[rgba(189,189,189,1)]">
          FEATURED AND SEEN IN
        </h1>
        <div className="flex w-fit xl:text-center xl:pl-96 xl:gap-20 xl:pt-8 items-center pb-5 justify-between gap-[50px]">
          <img
            src="https://res.cloudinary.com/demmasgzp/image/upload/v1716304459/Raft/cnbc-1_tbusum.png"
            className="w-[60px] h-[45px]"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/demmasgzp/image/upload/v1716304459/Raft/bloomberg-1_g1eotc.png"
            className="w-[100px] h-[40px]"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/demmasgzp/image/upload/v1716723368/reuters-2-1_1_1_ulh3dv.png"
            className="w-[100px] h-[28.33px]"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/demmasgzp/image/upload/v1716723485/cnn-logo_1_ych0hu.png"
            className="w-[100px] hidden xl:flex  h-[28.33px]"
            alt=""
          />
        </div>
      </div>
      <div className="px-4 flex  flex-col gap-7  xl:mx-60 xl:px-32 ">
        <h1 className="text-center items-center xl:w-[896px] xl:items-start  xl:ml-[-100px] xl:text-[76px] text-[36px]">
          Elevate Your Financial Journey with RAFT
        </h1>
        <p className="text-center items-center xl:text-[20px] text-[rgba(152,152,152,1)]">
          RAFT offers a world of financial possibilities. From investments to
          payments, we've got you covered. Join us and unlock your financial
          potential today.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row xl:items-center xl:text-center xl:justify-center gap-3">
        <img
          src="https://res.cloudinary.com/demmasgzp/image/upload/v1716306979/Raft/Frame_88_tprfxw.png"
          className="mt-10 xl:h-[500px] xl:w-[822px] p-8"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/demmasgzp/image/upload/v1716307258/Raft/Frame_1000001576_oclag8.png"
          className="mt-10 xl:h-[500px] xl:w-[442px] p-8"
          alt=""
        />
      </div>
      <div className="xl:flex xl:flex-row xl:items-center xl:text-center xl:justify-center">
        <img
          src="https://res.cloudinary.com/demmasgzp/image/upload/v1716312610/Raft/Frame_1000001577_mx42bu.png"
          className="mt-10 xl:h-[500px] xl:w-[442px] p-8"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/demmasgzp/image/upload/v1716312691/Raft/Frame_1000001578_dammmg.png"
          className="mt-10 p-8  xl:h-[500px] xl:w-[822px] "
          alt=""
        />
      </div>
      <div className="flex flex-col  xl:mx-60 xl:px-0  px-4 pb-10 gap-5">
        <h1 className="text-center items-center xl:text-[76px] text-[36px]">
          Your Financial Freedom, Your Way
        </h1>
        <p className="text-center items-center xl:text-[20px] xl:px-28 text-[rgba(152,152,152,1)]">
          We believe that managing your finances should be effortless and
          cost-effective. That's why we offer you the freedom you deserve
        </p>
      </div>
      <img
        src="https://res.cloudinary.com/demmasgzp/image/upload/v1716313256/Raft/Frame_1000001580_xpaqi4.png"
        className="mt-10 xl:h-[915px] xl:justify-center xl:items-center xl:text-center xl:flex  xl:pl-[80px] xl:p-20   xl:w-[1496px] p-8 mb-6"
        alt=""
      />
      <div className="flex flex-col xl:flex-row xl:px-1 xl:justify-center  gap-6 pb-8">
        <div className="px-7 flex flex-col  gap-3">
          <div className="flex gap-3">
            <IoCashOutline className="w-[24px] h-[24px]" />
            <p className="xl:text-[24px]"> No minimum balance fees</p>
          </div>
          <p className="text-[rgba(152,152,152,1)] xl:text-[16px]">
            {" "}
            Say goodbye to minimum balance fees. Your account, your balance—no
            hidden charges
          </p>
        </div>
        <div className="px-7 flex flex-col  gap-3">
          <div className="flex gap-3">
            <BiCoinStack className="w-[24px] h-[24px] " />
            <p className="xl:text-[24px]">No monthly fees</p>
          </div>
          <p className="text-[rgba(152,152,152,1)] xl:text-[16px]">
            {" "}
            Bank with us without worrying about monthly fees. Keep more of your
            money where it belongs—in your account
          </p>
        </div>
        <div className="px-7 flex flex-col  gap-3">
          <div className="flex gap-3">
            <FaArrowRightArrowLeft className="w-[24px] h-[24px]" />
            <p className="xl:text-[24px]">No bank transfer fees</p>
          </div>
          <p className="text-[rgba(152,152,152,1)] xl:text-[16px]">
            {" "}
            Seamlessly transfer funds without the extra cost. Send and receive
            money with zero bank transfer fees.
          </p>
        </div>
      </div>
      <h1 className="text-[50px] mt-10 item-center xl:text-[128px] xl:p-[100px] bg-[rgba(72,214,76,1)] text-black px-5">
        Smart investments, secure payments, and expert guidance, all in one
        place.
      </h1>
      <div className="flex flex-col  xl:mr-[400px] xl:pr-[250px] mx-6 xl:ml-[100px] xl:gap-5 gap-8 xl:px-6 mt-10">
        <h1 className=" text-[36px] xl:text-[76px]">
          Confidently Shape Your Financial Future
        </h1>
        <p className=" text-[16px] xl:text-[20px] text-[rgba(152,152,152,1)]">
          At RAFT, we empower you to confidently shape your financial future.Our
          modern approach simplifies saving and investing, making it easier than
          ever.
        </p>
      </div>
      <div className="xl:flex xl:justify-center">
        <img
          src="https://res.cloudinary.com/demmasgzp/image/upload/v1716315534/Raft/Frame_35_hwr1hi.png"
          className="mt-10 p-8 mb-6  xl:h-[670px] xl:w-[620px]"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/demmasgzp/image/upload/v1716315640/Raft/Frame_1000001583_xuvk8s.png"
          className="mt-10 p-8 mb-6 xl:h-[670px] xl:w-[620px]"
          alt=""
        />
      </div>
      <div className="flex justify-between xl:justify-center xl:gap-40 gap-4 pb-10 px-8">
        <div className="flex text-center flex-col">
          <h1 className="xl:text-[80px]">50+</h1>
          <p className="text-[12px] xl:text-[18px] text-[rgba(152,152,152,1)] ">
            CITIES
          </p>
        </div>
        <div className="flex text-center flex-col">
          <h1 className="xl:text-[80px]">50,000+</h1>
          <p className="text-[12px] xl:text-[18px] text-[rgba(152,152,152,1)] ">
            TRANSACTION
          </p>
        </div>
        <div className="flex text-center flex-col">
          <h1 className="xl:text-[80px]">3M+</h1>
          <p className="text-[12px] xl:text-[18px] text-[rgba(152,152,152,1)] ">
            USERS
          </p>
        </div>
        <div className="flex text-center flex-col">
          <h1 className="xl:text-[80px]">5</h1>
          <p className="text-[12px] xl:text-[18px]  text-[rgba(152,152,152,1)] ">
            USERS RATING
          </p>
        </div>
      </div>
      <img
        src=" https://res.cloudinary.com/demmasgzp/image/upload/v1716317076/Raft/Frame_150_a5lvxb.png"
        className="mt-10 xl:w-[1440px] xl:h-[848px] pb-6"
        alt=""
      />
      <div className="flex flex-col text-center gap-4 px-5 py-12 xl:mx-[300px]">
        <p className="text-[16px] text-[rgba(72,214,76,1)] xl:text-[18px]">
          INTRODUCING
        </p>
        <h1 className="text-[36px] xl:text-[76px]">
          Introducing RAFT's Next-Gen Cards
        </h1>
        <p className="text-[16px] text-center xl:text-[20px] text-[rgba(152,152,152,1)] xl:px-20">
          Discover RAFT's latest innovation – our new cards. Elevate your
          banking experience with cutting-edge features, security, and
          unprecedented convenience.
        </p>
      </div>
      <img
        src="https://res.cloudinary.com/demmasgzp/image/upload/v1716318018/Raft/Frame_122_zzoeqo.png"
        className=" p-20 mb-6  xl:p-0 xl:flex xl:ml-[650px] xl:h-[222px] xl:justify-center xl:items-center xl:text-center"
        alt=""
      />
      <div className="flex flex-col xl:flex-row gap-4 px-6 pb-10">
        <div className="flex flex-col gap-3">
          <div className="flex text-[20px] gap-3 items-center ">
            <FaCopy className="" />
            <h1 className="text-[20px]">Contactless Technology</h1>
          </div>
          <p className="text-[16px] text-[rgba(152,152,152,1)]">
            Our new cards come equipped with contactless technology, allowing
            you to make swift, secure payments with a simple tap.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex text-[20px] gap-3 items-center">
            <FaIdCard />
            <h1 className="text-[20px]">Personalization</h1>
          </div>
          <p className="text-[16px] text-[rgba(152,152,152,1)]">
            Customize your card to reflect your unique style. Choose from a
            range of designs that suit your personality.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex text-[20px] gap-3 items-center">
            <FaLock />
            <h1 className="text-[20px]">Enhanced Security</h1>
          </div>
          <p className="text-[16px] text-[rgba(152,152,152,1)]">
            Your peace of mind is our priority. Our cards feature advanced
            security measures to protect your transactions and data.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 text-black py-7 mt-10 px-9 bg-[rgba(72,214,76,1)]">
        <h1 className="text-[32px] text-center xl:text-[76px] xl:mx-[300px]">
          Join over 3 million members
        </h1>
        <div className="flex flex-col gap-5  xl:hidden">
          <p className="text-[16px]">{landing[index].wordings}</p>
          <div className="flex justify-between ">
            <div className="flex flex-col ">
              <h1 className="text-[20px]">{landing[index].name}</h1>
              <p className="text-[16px]">Happy RAFT User</p>
            </div>
            <img src={landing[index].images} alt="" className=" h-[40px]" />
          </div>
        </div>
        <div className="flex gap-3 justify-end xl:hidden ">
          <FaArrowLeft
            onClick={() => {
              handleClick(index - 1);
            }}
            className="text-black bg-white text-[40px] rounded-full border p-3 border-black "
          />
          <FaArrowRight
            onClick={() => {
              handleClick(index + 1);
            }}
            className="text-black bg-white text-[40px] rounded-full border p-3 border-black "
          />
        </div>
        <div className="hidden xl:flex xl:justify-between ">
          <div className="flex flex-col gap-5 border-black  pl-3 mr-[-130px] border-l-2">
            <p className="pr-40">
              RAFT has transformed my approach to finance. Their smart investing
              options have helped me grow my wealth, and their user-friendly
              platform makes managing my money a breeze. I've never felt more
              confident about my financial future.
            </p>
            <div className="flex justify-between ">
              <div className="flex flex-col">
                <h1>Robert Fox</h1>
                <p>Happy RAFT User</p>
              </div>
              <img
                src="https://res.cloudinary.com/demmasgzp/image/upload/v1716481704/Frame_127_xxzc0t.png"
                className="pr-40 h-[40px]"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col  border-black  pl-3 border-l-2 gap-5 mr-[-130px]  ">
            <p className="pr-[160px]">
              I can't express how grateful I am to RAFT. Their wealth management
              services have been a game-changer for my family's financial
              security. The expert guidance and personalized strategies have
              given us peace of mind, knowing that our future is in capable
              hands.
            </p>
            <div className="flex justify-between ">
              <div className="flex flex-col">
                <h1>Cameron Williamson</h1>
                <p>Happy RAFT User</p>
              </div>
              <img
                src="https://res.cloudinary.com/demmasgzp/image/upload/v1716560672/Frame_130_icyvte.png"
                className=" pr-40 h-[40px]"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col  border-black  pl-3 mr-[-130px] border-l-2 gap-5  ">
            <p className="pr-40">
              RAFT's financial planning services have been a lifeline for me. I
              always struggled with managing my money, but their team crafted a
              tailored plan that addressed my goals and concerns. It's been a
              game-changer in achieving my financial dreams
            </p>
            <div className="flex justify-between ">
              <div className="flex flex-col">
                <h1>Esther Howard</h1>
                <p>Happy RAFT User</p>
              </div>
              <img
                src="https://res.cloudinary.com/demmasgzp/image/upload/v1716560771/Frame_136_hyfyzf.png"
                className="pr-40 h-[40px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-4 xl:px-10  items-start flex flex-col pr-3 mr-5">
        <h1 className="flex  pl-6 text-[60px] justify-center">
          Frequently asked questions
        </h1>
        <Accordion
          title="How do I create an account with RAFT?"
          answer="i dont know"
        />
        <Accordion
          title="How does RAFT ensure the security of my financial data?"
          answer="i dont know"
        />
        <Accordion
          title="What types of transactions can I perform with RAFT?"
          answer="i dont know"
        />
        <Accordion
          title="What benefits does RAFT offer for wealth management?"
          answer="i dont know"
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
