import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({ tableName: "User", timestamps: true })
export default class User extends Model {
    @Column({ type: DataType.STRING, allowNull: false, primaryKey: true })
    public readonly Id?: string;

    @Column({ type: DataType.STRING, allowNull: false })
    public Name!: string;
    
    @Column({ type: DataType.STRING, allowNull: false })
    public Email!: string;

    @Column({ type: DataType.STRING, allowNull: false })
    public Password!: string;
}