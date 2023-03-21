import { FC } from "react"
import {
    WalletDisconnectButton,
    WalletMultiButton
  } from '@solana/wallet-adapter-react-ui';


export const Header: FC = () => {
    return (
        <header>
            <div id="brandDiv">
                <img src='./logo192.png'></img>
                <h1>Spritely.fun</h1>
            </div>

            <WalletMultiButton />
        </header>
    )
}