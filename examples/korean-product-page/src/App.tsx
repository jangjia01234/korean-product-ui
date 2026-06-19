import {
  ProductButton,
  ProductPanel,
  ProductPanelHeader,
  ProductStatusBadge,
} from 'korean-product-ui'

const queueRows = [
  ['REQ-1024', '계약서 검토', '오늘 14:00', '진행 가능'],
  ['REQ-1025', '정산 자료 확인', '오늘 16:30', '주의 필요'],
  ['REQ-1026', '고객사 답변 대기', '내일 10:00', '대기'],
]

export function App() {
  return (
    <main className="demo-shell">
      <aside className="demo-nav" aria-label="예시 메뉴">
        <strong>Product UI</strong>
        <nav>
          <a aria-current="page">오늘 업무</a>
          <a>요청 큐</a>
          <a>운영 로그</a>
          <a>설정</a>
        </nav>
      </aside>

      <section className="demo-page">
        <header className="demo-header">
          <div>
            <span>한국어 운영툴 예시</span>
            <h1>오늘 처리해야 할 요청</h1>
            <p>중요한 상태, 다음 액션, 담당자 판단에 필요한 정보만 먼저 보여줍니다.</p>
          </div>
          <ProductButton>새 요청 등록</ProductButton>
        </header>

        <section className="demo-grid">
          <ProductPanel tone="outlined" elevation="raised">
            <ProductPanelHeader
              eyebrow="요청 큐"
              title="12건 대기"
              description="SLA가 가까운 항목부터 정렬됩니다."
            />
            <ProductStatusBadge tone="accent">정상 처리 중</ProductStatusBadge>
          </ProductPanel>

          <ProductPanel tone="muted">
            <ProductPanelHeader
              eyebrow="주의"
              title="2건 확인 필요"
              description="자료 누락이나 고객사 답변 지연 항목입니다."
            />
            <ProductStatusBadge tone="warning">담당자 확인</ProductStatusBadge>
          </ProductPanel>

          <ProductPanel tone="outlined">
            <ProductPanelHeader
              eyebrow="완료"
              title="28건"
              description="오늘 처리 완료된 요청입니다."
            />
            <ProductButton variant="secondary">로그 보기</ProductButton>
          </ProductPanel>
        </section>

        <ProductPanel className="demo-table-panel" tone="outlined">
          <ProductPanelHeader
            eyebrow="작업 목록"
            title="우선 처리 항목"
            description="표는 촘촘하지만 행 높이와 상태 배지를 일정하게 유지합니다."
          />
          <table className="demo-table">
            <thead>
              <tr>
                <th>번호</th>
                <th>업무</th>
                <th>기한</th>
                <th>상태</th>
                <th>작업</th>
              </tr>
            </thead>
            <tbody>
              {queueRows.map(([id, title, due, status]) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{due}</td>
                  <td>
                    <ProductStatusBadge tone={status === '주의 필요' ? 'warning' : 'neutral'}>
                      {status}
                    </ProductStatusBadge>
                  </td>
                  <td>
                    <ProductButton size="sm" variant="secondary">열기</ProductButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ProductPanel>
      </section>
    </main>
  )
}
