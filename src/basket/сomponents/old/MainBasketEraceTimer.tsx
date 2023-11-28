import { FC, memo } from "react";
import { MdRestore } from "react-icons/md"
import { Button } from "antd"
import { motion } from 'framer-motion'


interface MainBasketEraceTimerProps {
    onClick: () => void,
    timerWidth: boolean | number,
}


const MainBasketEraceTimer: FC<MainBasketEraceTimerProps> = ({ onClick, timerWidth }) => {

    return <motion.div className="flex absolute w-full bg-slate-600 z-10 justify-between p-2 flex-col box-border">
        <h6>Товар удалён</h6>
        <Button className="flex justify-center items-center gap-2" size="small" onClick={onClick} icon={<MdRestore fill="#969696" />}>Восстановить</Button>
    </motion.div>
}

export default memo(MainBasketEraceTimer);