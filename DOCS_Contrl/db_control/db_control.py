# Функция создания базы данных, запускать только один раз при ее создании
import os
import sqlite3


def First_Init():
    conn = sqlite3.connect("db_s.db")
    cursor = conn.cursor()
    # Создание таблицы
    cursor.execute('''CREATE TABLE ACTIVITY(
                        ID INT UNIQUE ,
                        DATE_START DATE,
                        DATE_END DARE,
                        TITLE TEXT,
                        COMMENT TEXT
                        );
                        
                        CREATE TABLE ACTIVITY_MEMBERS
                        (
                        ID INT,
                        EMP_ID INT,
                        ACTIVITY_ID INT
                        );
                        
                        CREATE TABLE SIGNATURE
                        (
                        ID INT,
                        EMP_ID INT UNIQUE ,
                        DOC_ID INT,
                        IS_OVER CHAR
                        );
                        
                        CREATE TABLE EMPLOYEE
                        (
                        ID INT UNIQUE ,
                        FIO INT,
                        POST_NAME VARCHAR(100),
                        BIRTH_DATE DATE
                        );
                        
                        CREATE TABLE TYPE
                        (
                        ID NUMBER UNIQUE ,
                        TEMPLATE_WAY VARCHAR(MAX),
                        TYPE_NAME VARCHAR(500)
                        );
                        
                        CREATE TABLE DOCS
                        (
                        ID NUMBER,
                        EMP_ID NUMBER,
                        DATE_CREATE DATE,
                        TYPE_ID NUMBER,
                        MASS TEXT[]
                        );''')
    conn.commit()
    conn.close()
    return


if __name__ == '__main__':
    First_Init()
