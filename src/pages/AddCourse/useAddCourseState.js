import React from "react";
import {onChangeFile, onChangeText} from "../../Util/function";

const useAddCourseState = () => {

    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [typeId, setTypeId] = React.useState("");
    const [courseFile, setCourseFile] = React.useState(null);
    const [level, setLevel] = React.useState("");
    const [duration, setDuration] = React.useState("");
    const [isDisable, setDisable] = React.useState(true);

    const getter = {title, description, typeId, courseFile, level, duration, isDisable};
    const setter = {
        title: onChangeText(setTitle),
        description: onChangeText(setDescription),
        typeId: onChangeText(setTypeId),
        courseFile: onChangeFile(setCourseFile),
        level: onChangeText(setLevel),
        duuration: onChangeText(setDuration)
    }
    React.useEffect(() => {
        if (title && description && typeId && courseFile && level && duration) {
            setDisable(false)
        } else setDisable(true)
    }, [courseFile, description, duration, level, title, typeId])

    return {
        getter, setter
    }



}
export default useAddCourseState