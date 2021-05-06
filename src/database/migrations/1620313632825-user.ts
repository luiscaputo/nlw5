import { table } from "node:console";
import {MigrationInterface, QueryRunner} from "typeorm";

export class user1620313632825 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new table({
                name:"user",
                columns: [
                    {
                        name: "id",
                        isPrimary: "true",
                        type: "int"
                    }, 
                    {
                        name: ""
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
