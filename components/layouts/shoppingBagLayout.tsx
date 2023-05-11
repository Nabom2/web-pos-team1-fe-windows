import React from "react";
import Location from "@/components/Location";
import Header from "@/components/Header"
import Footer from "@/components/Footer";
import Link from "next/link";
import Text2Button from "@/components/Text2Button";
import Text from "@/components/Text";
import style from "./shoppingBagLayout.module.css"

export default function ShoppingBagLayout(props:{children:React.ReactNode}) {
    return (
        <div>
            <Header />
            <Location />
            {props.children}
            <Text text="필요하신 쇼핑백을 선택해 주세요" />
                <div className={style.upperBtn}>
                    <Text2Button src="/images/paperBagg.png" alt="purchase paper bag" text1="종이봉투" text2="(100원)" onClick={() => console.log('btn 1')}/>
                </div>
                <div className={style.lowerBtn}>
                    <Text2Button src="/images/recyclingBaggg.png" alt="purchase recycling bag" text1="종량제봉투" text2="(850원)" onClick={() => console.log('btn 2')}/>
                    <Link href="/payments">
                        <Text2Button src="/images/forbiden.png" alt="pass this step" text1="필요없음" onClick={() => console.log('btn 3')}/>
                    </Link>
                </div>
            <Link href='/ssgService'>
            <Footer />
            </Link>
        </div>
    )
}
