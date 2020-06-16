export class SubmittedAssignment
{
    assignment_name :string
    email: string;
    filename: string;
    uploadfile: File;
    constructor(
        assignment_name :string,
        email:string,
        filename:string,
        uploadfile: File
    ){}
}