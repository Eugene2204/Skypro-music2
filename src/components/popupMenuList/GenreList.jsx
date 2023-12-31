import React from 'react';
import * as S from './authorList.styles.js';
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

export const GenreList = () => {
    return (
        <S.PopupList>
        <OverlayScrollbarsComponent options={{ scrollbars: { autoHide: 'auto'}}}>
            <S.BlockScroll>
            <S.PopupItem>Рок</S.PopupItem>
            <S.PopupItem>Хип-хоп</S.PopupItem>
            <S.PopupItem>Поп-музыка</S.PopupItem>
            <S.PopupItem>Техно</S.PopupItem>
            <S.PopupItem>Инди</S.PopupItem>
            </S.BlockScroll>
        </OverlayScrollbarsComponent>
        </S.PopupList>
    )
}