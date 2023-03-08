import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({ tableName: "User", timestamps: true })
export class User extends Model {
    @Column({ type: DataType.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true })
    id !: number;

    @Column({ type: DataType.STRING, allowNull: false })
    name !: string;
    
    @Column({ type: DataType.STRING, allowNull: false })
    email !: string;

    @Column({ type: DataType.STRING, allowNull: false })
    password !: string;
}