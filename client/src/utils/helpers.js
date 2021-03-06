import { gql } from '@apollo/client';

export const QUERY_STATS = gql`
mutation football($code: String){
	football(code: $code ){
		_id,
		code, 
		name,
		goodStats{
			score,
			firstDowns,
          firstDownsRushing,
          firstDownsPassing,
          firstDownsPenalty,
          offensiveYards,
          offensiveYardsPerPlay,
          TDs,
          rushingYards,
          rushingYardsPerAttempt,
          rushingTDs,
          passingCompletions,
          passingYards,
          passingTDs,
          passingYardsPerAttempt,
          passingYardsPerCompletion,
          completionPct,
          passerRating,
          thirdDownConversions,
          thirdDownPct,
          fourthDownConversions,
          fourthDownPct,
          goalToGoConversions,
          returnYards,
          qbHits,
          tfl,
          safeties,
          punts,
          puntYards,
          puntAvg,
          takeaways,
          turnoverDifferential,
          oppPassingINTs,
          oppPenalties,
          oppPenaltyYards,
          oppFumblesLost,
          oppTimesSacked,
          oppTimesSackedYards,
          redZonePct,
          qbHitsDiff,
          tflDiff,
          qbSacksDiff,
          tflPct,
          qbhitsPct,
          oppTimesSackedPct,
          kickoffTouchbacks,
          puntNetAvg,
          extraPointPassingConversions,
          extraPointRushingConversions,
          fgsMade,
          puntReturnYards,
          kickReturnYards,
          intReturnYards,
          oppPuntsHadBlocked,
          oppExtraPointsHadBlocked,
          oppFGsHadBlocked,
          soloTackles,
          assistedTackles,
          sacks,
          sackYards,
          passesDefended,
          fumblesForced,
          fumblesRecovered,
          fumbleReturnYards,
          fumbleReturnTDs,
          intReturnTDs,
          blockedKicks,
          puntReturnLong,
          kickReturnLong,
          blockedKickReturnYards,
          blockedKickReturnTDs,
          fgReturnTDs,
          puntNetYards,
          twoPointConversionReturns
		},
		badStats{
			oppScore,
            passingINTs,
            penalties,
            penaltyYards,
            fumblesLost,
            timesSacked,
            timesSackedYards,
            giveaways,
            oppScoreQ1,
            oppScoreQ2,
            oppScoreQ3,
            oppScoreQ4,
            oppScoreOT,
            oppFirstDowns,
            oppFirstDownsRushing,
            oppFirstDownsPassing,
            oppFirstDownsPenalty,
            oppOffensiveYards,
            oppOffensiveYardsPerPlay,
            oppTDs,
            oppRushingYards,
            oppRushingYardsPerAttempt,
            oppRushingTDs,
            oppPassingCompletions,
            oppPassingYards,
            oppPassingTDs,
            oppPassingYardsPerAttempt,
            oppPassingYardsPerCompletion,
            oppCompletionPct,
            oppPasserRating,
            oppThirdDownPct,
            oppFourthDownPct,
            oppReturnYards,
            oppQBHits,
            oppTFL,
            oppSafeties,
            oppPunts,
            oppPuntYards,
            oppPuntAvg,
            timesSackedPct,
            oppRedZonePct,
            oppQBHitsPct,
            puntsHadBlocked,
            extraPointsHadBlocked,
            fgsHadBlocked,
            oppPuntNetAvg,
            oppExtraPointPassingConversions,
            oppExtraPointRushingConversions,
            oppFGsMade,
            oppPuntReturnYards,
            oppKickReturnYards,
            oppINTReturnYards,
            oppSoloTackles,
            oppAssistedTackles,
            oppSacks,
            oppSackYards,
            oppPassesDefended,
            oppFumblesForced,
            oppFumblesRecovered,
            oppFumbleReturnTDs,
            oppINTReturnTDs,
            oppBlockedKicks,
            oppKickReturnTDs,
            oppBlockedKickReturnTDs,
            oppFGReturnTDs,
            oppPuntNetYards,
            oppTwoPointConversionReturns
		}
	}
}
`;

export function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

export function removeHyphensAndCapitalize(string) {
	return string.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase())
}

export function checkPassword(input) {
	const passw = /^[A-Za-z]\w{7,14}$/;
	if (input.match(passw)) {
		return true;
	}
	return false;
}