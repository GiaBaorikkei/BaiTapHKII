import { useDispatch, useSelector } from "react-redux"
import { changeLanguage } from "../store/reducers/changeLanguage"

export default function ChangeLanguage() {
    const language = useSelector((state: any) => state);
    const dispatch = useDispatch();
    console.log(language.changeLanguage);
    
  return (
    <div>Bài 6
        <div className="p-4">
        <p>
          {language.changeLanguage === "en"
            ? "Current Language: English"
            : "Ngôn ngữ hiện tại: Tiếng Việt"}
        </p>
        <select onChange={() => dispatch(changeLanguage())}>
          <option value="">English</option>
          <option value="">Vietnamise</option>
        </select>
      </div>
      <div>
        {language.changeLanguage === "en" ? (
          <p>Rikkei Academy</p>
        ) : (
          <p>Học Viện Rikkei</p>
        )}
      </div>
    </div>
  )
}
