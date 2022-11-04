import { useEffect, useState } from "react";

const useDocumentTitle = (title: string) => {
	const [document_title, setDocumentTitle] = useState<string>(title);
	useEffect(() => {
		document.title = document_title;
	}, [document_title]);

	return [document_title, setDocumentTitle];
};

export { useDocumentTitle };
