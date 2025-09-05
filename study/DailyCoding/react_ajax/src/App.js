import React, { useState, useEffect } from "react";

// 🟡 Nav 컴포넌트 (props.list, props.onClick 사용)
function Nav({ list, onClick }) {
  return (
    <nav>
      <ul>
        {list.map((li) => (
          <li key={li.id}>
            <a
              href={li.id}
              data-id={li.id}
              onClick={(e) => {
                e.preventDefault();
                onClick(e.target.dataset.id);
              }}
            >
              {li.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// 🟡 Article 컴포넌트
function Article({ title, desc }) {
  return (
    <article>
      <h2>{title}</h2>
      {desc}
    </article>
  );
}

// 🟡 NowLoading 컴포넌트
function NowLoading() {
  return (
    <div style={{ backgroundColor: "orange" }}>
      Now Loading...
    </div>
  );
}

// 🟡 App 컴포넌트 (state와 lifecycle 관리)
function App() {
  // 🟢 상태 정의
  const [list, setList] = useState({ items: [], isLoading: true });
  const [article, setArticle] = useState({
    item: { title: "Welcome", desc: "Hello, React & Ajax" },
    isLoading: false,
  });

  // 🟢 컴포넌트가 처음 마운트될 때 실행 (list 불러오기)
  useEffect(() => {
    fetch("list.json")
      .then((res) => res.json())
      .then((json) => {
        setList({ items: json, isLoading: false });
      });
  }, []);

  // 🟢 클릭 시 article 가져오기
  const handleClick = (id) => {
    setArticle((prev) => ({
      ...prev,
      isLoading: true,
    }));

    fetch(`${id}.json`)
      .then((res) => res.json())
      .then((json) => {
        setArticle({
          item: { title: json.title, desc: json.desc },
          isLoading: false,
        });
      });
  };

  // 🟢 조건부 렌더링
  const NavTag = list.isLoading ? (
    <NowLoading />
  ) : (
    <Nav list={list.items} onClick={handleClick} />
  );

  const ArticleTag = article.isLoading ? (
    <NowLoading />
  ) : (
    <Article title={article.item.title} desc={article.item.desc} />
  );

  return (
    <div className="App">
      <h1>WEB</h1>
      {NavTag}
      {ArticleTag}
    </div>
  );
}

export default App;
