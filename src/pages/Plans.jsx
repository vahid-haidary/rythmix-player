import { Check, Plus ,Minus} from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Plans() {
  const navigate = useNavigate()
  const [showList, setShowList] = useState(false)
  

  const clickHandle = () => {
    setShowList((prev) => !prev)
  }
  return (
    <div>
        <div className='flex fixed left-0 right-0 mx-auto justify-center cursor-pointer'>
          <button onClick={() => {navigate(-1)}}>
            <img className='max-xs:w-32' src="/assets/icons/curve.svg" alt="curve.svg" />
          </button>
        </div>
        <div className='w-[95%]  mx-auto pb-6 bg-gradient-to-b from-green-rytm to-background-accent shadow-[0px_15px_6px_0px_rgba(0,_0,_0,_0.1)] rounded-b-3xl '>
          <div className='pt-10'>
          <img className=' w-[90%] mx-auto rounded-2xl ' src="/assets/banner/banner2.png" alt="" />
          </div>

          <div className='w-[90%] mx-auto mt-6'>
              <div className='flex items-center gap-2 font-kalameh-base text-primary text-xl'>
              <span className='w-2 h-8 bg-primary block rounded-4xl' ></span>
              <h2>کاربر ویژه ریتمیکس شوید.</h2>
              </div>
              <div className='flex items-center gap-2 text-white font-dana-base text-sm my-3' >
                <span className='w-2 h-2 bg-white block rounded-full' ></span>
                <h3>مزایای کاربر ویژه</h3>
              </div>

              <div className='flex flex-col gap-5 font-dana-base text-white pr-4 text-tiny' >
                <div className='flex items-center gap-2'>
                  <Check size={20} className='text-white'/>
                  <span>بیش از 5 سال سرویس دهی پایدار</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Check size={20} className='text-white'/>
                  <span>بیش از 5 میلیون نصب ازاستور رسمی پلی استور</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Check size={20} className='text-white'/>
                  <span>دسترسی نامحدود به تمام آهنگ های خارجی و ایرانی</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Check size={20} className='text-white'/>
                  <span>حذف تبلیغات بین آهنگ ها</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Check size={20} className='text-white'/>
                  <span>مشاهده متن کامل آهنگ ها</span>
                </div>
              {showList && (
                <>
                    <div className='flex items-center gap-2'>
                    <Check size={20} className='text-white'/>
                    <span>ساخت نامحدود پلی لیست</span>
                  </div>
                    <div className='flex items-center gap-2'>
                    <Check size={20} className='text-white'/>
                    <span>دسترسی به همه آهنگ های پلی لیست ها</span>
                  </div>
                    <div className='flex items-center gap-2'>
                    <Check size={20} className='text-white'/>
                    <span>پشتیبانی VIP مخصوص کاربران ویژه</span>
                  </div>
                </>
              )}
              </div>
              <div className='flex text-primary text-tiny cursor-pointer items-center gap-1 font-dana-base mt-4 pr-4' onClick={clickHandle}>
                
                {!showList ? <Plus size={20}/>:<Minus size={20} />}
                <span>{showList ? "بستن" : "مشاهده بیشتر"}</span>
              </div>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-4 *:bg-background2 *:rounded-2xl *:p-4 *:shadow-[0px_15px_6px_0px_rgba(0,_0,_0,_0.1)] px-4 my-5'>

          <div className='flex flex-col bg-gradient-to-b from-green-rytm to-background2'>
              <div>
                <span className='font-kalameh-base text-xl'>یکساله</span>
                <span className='w-full h-0.5 bg-black -px-[20px] block mt-4 mb-2' ></span>
              </div>
              <div className='text-center'>
                <span className='bg-background-accent w-[90%] max-xs:px-1 rounded-3xl font-dana-base text-tiny px-10 py-0.5'>🎉تخفیف ویژه سال نو</span>
              </div>

              <span className='font-kalameh-base text-tiny pb-4 py-3'>هرماه:</span>

              <div className='flex flex-col gap-1 font-kalameh-base items-center'>
                  <div className='flex items-center gap-1 line-through text-text-accent'>
                    <span className='text-2xl font-dana-bold font-extrabold'>59</span>
                    <span className='text-tiny'>هزارتومان</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <span className='text-2xl font-dana-bold font-extrabold'>16</span>
                    <span className='text-tiny'>هزارتومان</span>
                  </div>
              </div>
              <button className='w-[95%] rounded-3xl text-sm mx-auto bg-primary px-8 py-2 text-black font-dana-base'>خرید</button>
          </div>
          <div className='flex flex-col'>
              <div>
                <span className='font-kalameh-base text-xl'>شش ماهه</span>
                <span className='w-full h-0.5 bg-black block mt-4 mb-2' ></span>
              </div>
              <div className='text-center'>
                <span className='bg-background-accent w-[90%] rounded-3xl font-dana-base text-tiny max-xs:px-4 px-12 py-0.5 text-primary'>%51 تخفیف</span>
              </div>

              <span className='font-kalameh-base text-tiny pb-4 py-3'>هرماه:</span>

              <div className='flex flex-col gap-1 font-kalameh-base items-center'>
                  <div className='flex items-center gap-1 line-through text-text-accent'>
                    <span className='text-2xl font-dana-bold font-extrabold'>59</span>
                    <span className='text-tiny'>هزارتومان</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <span className='text-2xl font-dana-bold font-extrabold'>29</span>
                    <span className='text-tiny'>هزارتومان</span>
                  </div>
              </div>
              <button className='w-[95%] rounded-3xl text-sm mx-auto bg-primary px-8 py-2 text-black font-dana-base'>خرید</button>
          </div>
          <div className='flex flex-col'>
              <div>
                <span className='font-kalameh-base text-xl'>سه ماهه</span>
                <span className='w-full h-0.5 bg-black block mt-4 mb-2' ></span>
              </div>
              <div className='text-center'>
                <span className='bg-background-accent w-[90%] rounded-3xl font-dana-base text-tiny max-xs:px-2 px-12 py-0.5 text-primary'>%34 تخفیف</span>
              </div>

              <span className='font-kalameh-base text-tiny pb-4 py-3'>هرماه:</span>

              <div className='flex flex-col gap-1 font-kalameh-base items-center'>
                  <div className='flex items-center gap-1 line-through text-text-accent'>
                    <span className='text-2xl font-dana-bold font-extrabold'>59</span>
                    <span className='text-tiny'>هزارتومان</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <span className='text-2xl font-dana-bold font-extrabold'>39</span>
                    <span className='text-tiny'>هزارتومان</span>
                  </div>
              </div>
              <button className='w-[95%] rounded-3xl text-sm mx-auto bg-primary px-8 py-2 text-black font-dana-base'>خرید</button>
          </div>
          <div className='flex flex-col justify-between'>
              <div>
                <span className='font-kalameh-base text-xl'>یک ماهه</span>
                <span className='w-full h-0.5 bg-black block mt-4 mb-2' ></span>
              </div>

              <span className='font-kalameh-base text-tiny pb-4 py-3'>هرماه:</span>

              <div className='flex flex-col gap-1 justify-between font-kalameh-base items-center'>
                  <div className='flex items-center gap-1 '>
                    <span className='text-2xl font-dana-bold font-extrabold'>59</span>
                    <span className='text-tiny'>هزارتومان</span>
                  </div>

              </div>
              <button className='w-[95%] rounded-3xl text-sm mx-auto bg-primary px-8 py-2 text-black font-dana-base'>خرید</button>
          </div>

        </div>
    </div>
  )
}

export default Plans