/// <reference types="react" />
interface UploadProps {
    title?: string;
    description?: string;
    minFileSize?: number;
    maxFileSize?: number;
    acceptFormats?: string;
    onSelect: (file: File | null) => void;
}
declare const memoUpload: import("react").MemoExoticComponent<React.FC<UploadProps>>;
export { memoUpload as Upload };
