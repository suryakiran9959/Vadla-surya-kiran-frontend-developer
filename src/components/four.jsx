import "./four.css"
function Four(){
    const labelStyle = {
        paddingRight: '60px',
        paddingBottom:"15px"
      };
    return(
        <>
    <h3 className="tokenomics">Tokenomics </h3>
    <div className="tparent">
        <img src="/assets/Donut.png" alt="" />
        <div className="ta">
      <table>
        <tbody>
          <tr>
            <td style={labelStyle}>Name</td>
            <td>:  EthAi</td>
          </tr>
          <tr>
            <td style={labelStyle}>Token Name</td>
            <td>:  $EthAi</td>
          </tr>
          <tr>
            <td style={labelStyle}>Token Standard</td>
            <td>:  ERC20</td>
          </tr>
          <tr>
            <td style={labelStyle}>Blockchain</td>
            <td>:  Ethereum</td>
          </tr>
          <tr>
            <td style={labelStyle}>Total Supply</td>
            <td>:  100 Million</td>
          </tr>
          <tr>
            <td style={labelStyle}>Tax</td>
            <td>:  5%/5%</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="tb">
      <table>
        <tbody>
          <tr>
            <td style={labelStyle}>Team</td>
            <td>: 35%</td>
          </tr>
          <tr>
            <td style={labelStyle}>Marketing</td>
            <td>: 5%</td>
          </tr>
          <tr>
            <td style={labelStyle}>Liquidity Pool</td>
            <td>: 90%</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
        </>
    )
}
export default Four